using AjaxControllers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace AjaxControllers.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public ActionResult<string> SimplePost(int? id)
        {
            string jsonString;

            using (StreamReader reader = new StreamReader(Request.Body, System.Text.Encoding.UTF8))
            {
                jsonString = reader.ReadToEnd();
            }

            UserModel jsonObject = JsonConvert.DeserializeObject<UserModel>(jsonString);
            
            return Json(jsonObject.Value1 + jsonObject.Value2);

        }


    }
}
