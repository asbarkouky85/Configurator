using CodeShellCore.Web.Controllers;
using CodeShellCore.Web.Filters;
using CodeShellCore.Web.Moldster.Configurator;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Configurator.UI.Controllers
{
    [QueryAuthorizeFilter(AllowAnonymous = true)]
    public class HomeController : BaseMvcController
    {

        public IActionResult Index()
        {
            var file = System.IO.File.ReadAllBytes("wwwroot/index.html");
            return File(file, "text/html");
        }

        
    }
}
