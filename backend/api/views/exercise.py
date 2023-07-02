from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime, timedelta, timezone
import json
import logging

from ..models import Users, Machines, UsingMachines, ExerciseHistory

logger = logging.getLogger(__name__)

@csrf_exempt
def scanQR(request):
    if request.method == "POST":
        params = json.loads(request.body)

        try:
            usingMachine = UsingMachines.objects.filter(machine=params["machine"], user=params["user"])
            if usingMachine.first() is None:
                user = Users.objects.get(id=params["user"])
                machine = Machines.objects.get(id=params["machine"])

                UsingMachines.objects.create(
                    machine=machine,
                    user=user
                )

                return JsonResponse({"action": "create"})

            else:
                startDate = usingMachine.first().started_at
                endDate   = datetime.now(timezone.utc)

                exerciseTime = endDate - startDate

                ExerciseHistory.objects.create(
                    user=Users.objects.get(id=params["user"]),
                    machine_type=usingMachine.first().machine.machine_type,
                    time=str(exerciseTime.seconds),
                    point=100
                )

                usingMachine.first().delete()
                return JsonResponse({"action": "update"})

        except Exception as e:
            logger.debug(e)
            return JsonResponse({"message": "muripo"})
    else:
        return  JsonResponse({"message": "やほ"})

def isExercising(request):
    if request.method == "GET":
        try:
            usingMachine = UsingMachines.objects.filter(user=1)
            if usingMachine.first() is None:
                return JsonResponse({"isExercising": False})
            else:
                return JsonResponse({"isExercising": True, "started_at": usingMachine.first().started_at})

        except Exception as e:
            logger.debug(e)
            return JsonResponse({"isExercising": False})



def getHistory(request):
    if request.method == "GET":
        try:
            result = ExerciseHistory.objects.filter(user=Users.objects.get(id=1)).order_by("exercised_at").reverse()[:20]
            response = []
            for r in result:
                response.append({
                    "id": r.id,
                    "user": {
                        "id": r.user.id,
                        "name": r.user.name
                    },
                    "type": r.machine_type.name,
                    "point": r.point,
                    "time": r.time,
                    "exercised_at": r.exercised_at
                })
            return JsonResponse(response, json_dumps_params={"ensure_ascii": False}, safe=False)
        except Exception as e:
            logger.debug(e)
            return JsonResponse({"message": "muripo"})