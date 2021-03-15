using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Newtonsoft.Json;

namespace AjaxControllers_2.Controllers
{
    //[ApiController]
    //[Route("[controller]")]
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

        private readonly static Student[] Students = new[] 
        {
            new Student
            {
                id=1,
                name="Ivan",
                city="Cheboksary",
                phone="111"
            },
            new Student
            {
                id=2,
                name="Leanne Graham",
                city="Gwenborough",
                phone="222"
            },
            new Student
            {
                id=3,
                name="Ervin",
                city="Wisokyburgh",
                phone="333"
            },
        };

        List<Work> SortWorks = new List<Work>() {};
        private readonly static Work[] Works = new[]
{
            new Work
            {
                id=1,
                userId=1,
                title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body="dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
            },
            new Work
            {
                id=2,
                userId=1,
                title="qui est esse",
                body="ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            },
            new Work
            {
                id=3,
                userId=1,
                title="beatae enim quia vel",
                body="et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            new Work
            {
                id=4,
                userId=2,
                title="asperiores ea ipsam voluptatibus modi minima quia sint",
                body="itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio "
            },
            new Work
            {
                id=5,
                userId=2,
                title="iusto eius quod necessitatibus culpa ea",
                body="deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
            },
            new Work
            {
                id=6,
                userId=2,
                title="ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body="totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
            },
            new Work
            {
                id=7,
                userId=3,
                title="dolor sint quo a velit explicabo quia nam",
                body="voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
            },
            new Work
            {
                id=8,
                userId=3,
                title="ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body="animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
            },
            new Work
            {
                id=9,
                userId=3,
                title="rem alias distinctio quo quis",
                body="rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
            },
            new Work
            {
                id=10,
                userId=1,
                title="eveniet quod temporibust",
                body="reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
            },
        };

        private readonly ILogger<StudentsController> _logger;

        public StudentsController(ILogger<StudentsController> logger)
        {
            _logger = logger;
        }



        [HttpGet]
        public ActionResult<string> Get(int id)
        {
            return JsonConvert.SerializeObject(Students);
        }

        [HttpGet]
        public ActionResult<string> GetWorks(int id)
        {
            foreach (var element in Works)
            {
                if (element.userId == id)
                {
                    SortWorks.Add(element);
                }
            }

            return JsonConvert.SerializeObject(SortWorks);
        }
    }
}
