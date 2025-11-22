using Microsoft.AspNetCore.Http.HttpResults;

namespace Homeworker.Backend.Endpoints;

sealed class Endpoint : EndpointWithoutRequest<Ok>
{
    public override void Configure()
    {
        Get("api/route/here");
    }

    public override Task HandleAsync(CancellationToken ct) => Send.OkAsync(ct);
}