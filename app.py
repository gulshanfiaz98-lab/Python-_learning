from workers import WorkerEntrypoint, Response


class Default(WorkerEntrypoint):

    async def fetch(self, request):

        return Response(
            "Nova backend is running! 🤖"
        )
