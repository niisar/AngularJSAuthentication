using AngularJSAuthentication.API.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

//  The “assembly” attribute which states which class to fire on start-up.
[assembly: OwinStartup(typeof(AngularJSAuthentication.API.Startup))]
namespace AngularJSAuthentication.API
{
    /// <summary>
    /// This class will be fired once server starts.
    /// * the “assembly” attribute which states which class to fire on start-up.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// * Parameter “IAppBuilder” this parameter will be supplied by the host at run-time.
        /// * This “app” parameter is an interface which will be used to compose the 
        ///   application for our Owin server.
        /// * “HttpConfiguration” object is used to configure API routes, so we’ll pass 
        ///   this object to method “Register” in “WebApiConfig” class.
        /// * “config” object to the extension method “UseWebApi” which will be responsible 
        ///   to wire up ASP.NET Web API to our Owin server pipeline.
        /// </summary>
        /// <param name="app"></param>
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            ConfiguraOAuth(app);
            WebApiConfig.Register(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

        public void ConfiguraOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions OAuthServiceOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath  = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromSeconds(10),
                Provider = new SimpleAuthorizationServerProvider()
            };

            //Token Generation
            app.UseOAuthAuthorizationServer(OAuthServiceOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }
    }
}