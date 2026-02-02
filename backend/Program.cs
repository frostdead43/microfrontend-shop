using backend.Services;

var builder = WebApplication.CreateBuilder(args);



    builder.Services.AddControllers();
    builder.Services.AddOpenApi();

    builder.Services.AddScoped<ICartService,CartService>();

    builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy
            .WithOrigins(
                "http://localhost:3000",
                "http://localhost:3001", 
                "http://localhost:3002",
                "http://container-app:3000", 
                "http://home-app:3000",       
                "http://cart-app:3000")         
            .AllowAnyHeader()
            .AllowAnyMethod());
});

    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
    }


    app.UseCors("AllowFrontend"); 
    app.UseHttpsRedirection();
    app.MapControllers();

    app.Run();
