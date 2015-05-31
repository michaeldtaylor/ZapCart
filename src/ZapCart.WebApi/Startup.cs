using System.Linq;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Cors.Core;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace ZapCart.WebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
        }

        // This method gets called by a runtime.
        // Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().Configure<MvcOptions>(o =>
            {
                foreach (var jsonFormatter in o.OutputFormatters.Select(f => f.Instance).OfType<JsonOutputFormatter>())
                {
                    jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                }
            });

            services.AddCors();

            var policy = new CorsPolicy();

            policy.Headers.Add("*");
            policy.Methods.Add("*");
            policy.Origins.Add("*");
            policy.SupportsCredentials = true;

            services.ConfigureCors(x => x.AddPolicy("mypolicy", policy));

            // Uncomment the following line to add Web API services which makes it easier to port Web API 2 controllers.
            // You will also need to add the Microsoft.AspNet.Mvc.WebApiCompatShim package to the 'dependencies' section of project.json.
            // services.AddWebApiConventions();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // Configure the HTTP request pipeline.
            app.UseStaticFiles();

            //app.UseCors(policy => policy.WithOrigins("http://example.com"));

            app.Use(async (context, next) =>
            {
                context.Response.Headers.Append("Access-Control-Allow-Origin", "*");
                context.Response.Headers.Add("Access-Control-Allow-Headers", new[] { "Content-Type, x-xsrf-token" });
                await next();
            });

            // Add MVC to the request pipeline.
            app.UseMvc();
            // Add the following route for porting Web API 2 controllers.
            // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
        }
    }
}
