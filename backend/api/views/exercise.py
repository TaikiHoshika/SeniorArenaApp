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

                return JsonResponse({"message": "create"})

            else:
                startDate = usingMachine.first().started_at
                endDate   = datetime.now(timezone.utc)

                exerciseTime = str(endDate - startDate)

                ExerciseHistory.objects.create(
                    user=Users.objects.get(id=params["user"]),
                    machine_type=usingMachine.first().machine.machine_type,
                    time=exerciseTime,
                    point=100
                )

                usingMachine.first().delete()
                return JsonResponse({"message": "update"})

        except Exception as e:
            logger.debug(e)
            return JsonResponse({"message": "muripo"})
    else:
        return  JsonResponse({"message": "やほ"})

def getHistory(request):
    if request.method == "GET":
        try:
            result = ExerciseHistory.objects.filter(user=Users.objects.get(id=1))
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