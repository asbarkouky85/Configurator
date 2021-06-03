using CodeShellCore.Security;
using Microsoft.AspNetCore.Mvc;

namespace Configurator.UI.Controllers
{
    public class AccountController : CodeShellCore.Web.Controllers.AccountControllerBase
    {
        private readonly IUserAccessor acc;

        public override IActionResult GetUserData()
        {
            return Respond(acc.User);
        }
    }
}
