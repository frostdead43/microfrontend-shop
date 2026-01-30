using backend.Services;

var builder = WebApplication.CreateBuilder(args);



    builder.Services.AddControllers();
    builder.Services.AddOpenApi();

    builder.Services.AddScoped<ICartService,CartService>();
        builder.Services.AddCors(options => {
    options.AddPolicy("AllowNextJS",
        policy => policy
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
        });


    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
    }


app.UseCors("AllowNextJS");

    app.UseHttpsRedirection();
    app.MapControllers();

    app.Run();
