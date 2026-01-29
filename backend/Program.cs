using backend.Services;

var builder = WebApplication.CreateBuilder(args);


    builder.Services.AddControllers();
    builder.Services.AddOpenApi();

    builder.Services.AddScoped<ICartService,CartService>();

    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
    }

    app.UseHttpsRedirection();
    app.MapControllers();

    app.Run();
