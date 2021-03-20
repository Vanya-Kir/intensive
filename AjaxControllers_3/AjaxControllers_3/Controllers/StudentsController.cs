using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Newtonsoft.Json;
using System.IO;

namespace AjaxControllers_2.Controllers
{
    public class PostModel
    {
        public int userId { get; set; }

        public string title { get; set; }

        public string body { get; set; }
    }
    public class Student
    {
        public int id { get; set; }
        public string name { get; set; }
        public string city { get; set; }
        public string phone { get; set; }
    }

    public class Work
    {
        public int userId { get; set; }

        public int id { get; set; }

        public string title { get; set; }

        public string body { get; set; }
    }
    public class StudentsController : ControllerBase
    {
        List<Work> SortWorks = new List<Work>() {};

        private readonly ILogger<StudentsController> _logger;

        public StudentsController(ILogger<StudentsController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public ActionResult<string> Get()
        {

            string jsonString;

            using (StreamReader reader = new StreamReader(@"Models\students.json"))
            {
                jsonString = reader.ReadToEnd();
            }

            var studentsList = System.Text.Json.JsonSerializer.Deserialize<List<Student>>(jsonString);

            return JsonConvert.SerializeObject(studentsList);

        }

        [HttpGet]
        public ActionResult<string> GetWorks(int id)
        {
            string jsonString;

            using (StreamReader reader = new StreamReader(@"Models\works.json"))
            {
                jsonString = reader.ReadToEnd();
            }
            var worksList = System.Text.Json.JsonSerializer.Deserialize<List<Work>>(jsonString);
            if (id == -1) { return JsonConvert.SerializeObject(worksList); }
            foreach (var element in worksList)
            {
                if (element.userId == id)
                {
                    SortWorks.Add(element);
                }
            }

            return JsonConvert.SerializeObject(SortWorks);
        }


        [HttpPost]
        public ActionResult<string> SimplePost(int? id)
        {
            string post;
            using (StreamReader reader = new StreamReader(Request.Body, System.Text.Encoding.UTF8))
            {
                post = reader.ReadToEnd();
            }

            PostModel postObject = JsonConvert.DeserializeObject<PostModel>(post);

            string jsonString;
            using (StreamReader reader = new StreamReader(@"Models\works.json"))
            {
                jsonString = reader.ReadToEnd();
            }

            var worksList = System.Text.Json.JsonSerializer.Deserialize<List<Work>>(jsonString);

            using (StreamWriter sw = new StreamWriter(@"Models\works.json", false))
            {
                var a = new Work
                {
                    id = worksList.Count + 1,
                    userId = postObject.userId,
                    title = postObject.title,
                    body = postObject.body
                };

                worksList.Add(a);
                sw.WriteLine(JsonConvert.SerializeObject(worksList));
            }
            return ("ok"); 
        }

    }
}
