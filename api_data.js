define({ "api": [
  {
    "type": "post",
    "url": "HOST/api/login",
    "title": "User login",
    "version": "1.0.0",
    "name": "login",
    "description": "<p>Generates token for user</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username/student ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password (WIP)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>The auth token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "Bearer"
            ],
            "optional": false,
            "field": "token_type",
            "description": "<p>Defined class name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Token lifespan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90YWxpbmEubG9jYWw6ODA4MFwvYXBpXC9sb2dpbiIsImlhdCI6MTU4OTE5OTE4NSwiZXhwIjoxNTg5MjAyNzg1LCJuYmYiOjE1ODkxOTkxODUsImp0aSI6ImN2TVhWakdhNjRTT0x3NmkiLCJzdWIiOiJKREpWSkdELTdhbjZlbDUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwia2V5Ijo4fQ.V_9sTyiSHk5VuaIm6uy3cGzigvqDRBoL4Ek7SjR49Vg\",\n    \"token_type\": \"Bearer\",\n    \"expires_in\": 3600\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/AuthController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "HOST/api/class/attendance/{class_id}",
    "title": "Class Attendance",
    "version": "1.0.0",
    "name": "Attendance",
    "description": "<p>Returns list of users present in each class session</p>",
    "group": "Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>the class ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedule_id",
            "description": "<p>class schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>session date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "{\"\"",
              "canceled}"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>session status</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "is_active",
            "description": "<p>true if session date = current date, false otherwise</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "attendances",
            "description": "<p>List of users present in the current session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attendances.user_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.user_type",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "[\n    {\n        \"schedule_id\": 1,\n        \"date\": \"2020-05-11\",\n        \"status\": \"\",\n        \"is_active\": false,\n        \"attendances\": [\n            {\n                \"user_id\": 1,\n                \"username\": \"jayson\",\n                \"name\": \"jayson\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 2,\n                \"username\": \"grace\",\n                \"name\": \"grace\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 3,\n                \"username\": \"jen\",\n                \"name\": \"jen\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 4,\n                \"username\": \"davy\",\n                \"name\": \"davy\",\n                \"user_type\": \"s\"\n            }\n        ]\n    },\n    {\n        \"schedule_id\": 2,\n        \"date\": \"2020-05-13\",\n        \"status\": \"\",\n        \"is_active\": false,\n        \"attendances\": [\n            {\n                \"user_id\": 1,\n                \"username\": \"jayson\",\n                \"name\": \"jayson\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 2,\n                \"username\": \"grace\",\n                \"name\": \"grace\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 3,\n                \"username\": \"jen\",\n                \"name\": \"jen\",\n                \"user_type\": \"s\"\n            }\n        ]\n    },\n    {\n        \"schedule_id\": 3,\n        \"date\": \"2020-05-15\",\n        \"status\": \"\",\n        \"is_active\": true,\n        \"attendances\": [\n            {\n                \"user_id\": 1,\n                \"username\": \"jayson\",\n                \"name\": \"jayson\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 2,\n                \"username\": \"grace\",\n                \"name\": \"grace\",\n                \"user_type\": \"s\"\n            },\n            {\n                \"user_id\": 4,\n                \"username\": \"davy\",\n                \"name\": \"davy\",\n                \"user_type\": \"s\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ClassController.php",
    "groupTitle": "Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A JWT Token, e.g. &quot;Bearer {token}&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "HOST/api/class/{id}",
    "title": "Class Details",
    "version": "1.0.0",
    "name": "ClassDetail",
    "description": "<p>Returns the details of the class</p>",
    "group": "Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the class ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique class id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Defined class name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Class description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>The frequency of session</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_from",
            "description": "<p>Start of class</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_to",
            "description": "<p>End of class</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time_from",
            "description": "<p>Class duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time_to",
            "description": "<p>Class duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "teacher",
            "description": "<p>The teacher handling the class</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher.id",
            "description": "<p>Unique teacher id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.name",
            "description": "<p>The teacher's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules",
            "description": "<p>The class schedules</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.id",
            "description": "<p>Unique schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "schedules.from",
            "description": "<p>Session start</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "schedules.to",
            "description": "<p>Session end</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.status",
            "description": "<p>Session status: done, canceled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.teacher",
            "description": "<p>teacher handling this session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.teacher.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacher.first_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacher.last_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules.materials",
            "description": "<p>Class resources: notes, lessons, etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.materials.id",
            "description": "<p>Unique material id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "schedules.materials.added_by",
            "description": "<p>Someone who added the material</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.materials.added_by.id",
            "description": "<p>ID of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.materials.added_by.name",
            "description": "<p>Name of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules.activities",
            "description": "<p>List of activities attached to the session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.activities.id",
            "description": "<p>The activity id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.activities.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.activities.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "schedules.activities.available_from",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "schedules.activities.available_to",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules.activities.questions",
            "description": "<p>List of questions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.activities.questions.id",
            "description": "<p>The question id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.activities.questions.question",
            "description": "<p>The question text</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules.activities.materials",
            "description": "<p>Array of reading materials needed for this activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.activities.materials.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.activities.materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.activities.materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List of students enrolled in the class</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "students.id",
            "description": "<p>ID of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "students.name",
            "description": "<p>Name of student</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "students.user_type",
            "description": "<p>'s' =&gt; student by  default</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 1,\n    \"name\": \"English 101\",\n    \"description\": \"learn basics\",\n    \"frequency\": \"M,W,F\",\n    \"date_from\": \"2020-05-11\",\n    \"date_to\": \"2020-05-15\",\n    \"time_from\": \"09:00:00\",\n    \"time_to\": \"10:00:00\",\n    \"subject\": {\n        \"id\": 1,\n        \"name\": \"English\"\n    },\n    \"teacher\": {\n        \"id\": 8,\n        \"name\": \"teacher tom\"\n    },\n    \"schedules\": [\n        {\n            \"id\": 1,\n            \"date\": \"2020-05-11\",\n            \"status\": 0,\n            \"is_active\": false,\n            \"materials\": [\n                {\n                    \"id\": 1,\n                    \"title\": \"English Writing Part 1\",\n                    \"instruction\": \"read the textbook\",\n                    \"description\": \"learn english writing\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-writing-part1\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                },\n                {\n                    \"id\": 2,\n                    \"title\": \"English Writing Part 1\",\n                    \"instruction\": \"read the textbook\",\n                    \"description\": \"learn english writing\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-writing-part2\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": [\n                {\n                    \"id\": 1,\n                    \"title\": \"English Assignment 1\",\n                    \"instruction\": \"read it\",\n                    \"available_from\": \"2020-05-11\",\n                    \"available_to\": \"2020-05-15\",\n                    \"questions\": [\n                        {\n                            \"id\": 1,\n                            \"question\": \"what is noun?\"\n                        },\n                        {\n                            \"id\": 2,\n                            \"question\": \"what is adverb\"\n                        },\n                        {\n                            \"id\": 3,\n                            \"question\": \"what is predicate?\"\n                        }\n                    ],\n                    \"materials\": [\n                        {\n                            \"id\": 1,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics\"\n                        },\n                        {\n                            \"id\": 2,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics2\"\n                        }\n                    ]\n                },\n                {\n                    \"id\": 2,\n                    \"title\": \"English Assignment 2\",\n                    \"instruction\": \"read it\",\n                    \"available_from\": \"2020-05-20\",\n                    \"available_to\": \"2020-05-30\",\n                    \"questions\": [\n                        {\n                            \"id\": 4,\n                            \"question\": \"what is pronoun?\"\n                        },\n                        {\n                            \"id\": 5,\n                            \"question\": \"what is subject\"\n                        },\n                        {\n                            \"id\": 6,\n                            \"question\": \"what is plural?\"\n                        }\n                    ],\n                    \"materials\": [\n                        {\n                            \"id\": 3,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics3\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"date\": \"2020-05-13\",\n            \"status\": 0,\n            \"is_active\": false,\n            \"materials\": [\n                {\n                    \"id\": 3,\n                    \"title\": \"English Speaking\",\n                    \"instruction\": \"read the textbook\",\n                    \"description\": \"learn english speaking\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-speaking\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": []\n        },\n        {\n            \"id\": 3,\n            \"date\": \"2020-05-15\",\n            \"status\": 0,\n            \"is_active\": true,\n            \"materials\": [\n                {\n                    \"id\": 4,\n                    \"title\": \"English Grammar\",\n                    \"instruction\": \"read the textbook\",\n                    \"description\": \"learn english grammar\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-grammar\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": []\n        }\n    ],\n    \"students\": [\n        {\n            \"id\": 1,\n            \"name\": \"jayson\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"grace\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"jen\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 4,\n            \"name\": \"davy\",\n            \"user_type\": \"s\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ClassController.php",
    "groupTitle": "Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A JWT Token, e.g. &quot;Bearer {token}&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "HOST/api/classes",
    "title": "Class List",
    "version": "1.0.0",
    "name": "ClassList",
    "description": "<p>Returns list of classes</p>",
    "group": "Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StringOrNumber",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user. If user is logged in, use <code>user_id=me</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "schedules",
              "students"
            ],
            "optional": false,
            "field": "include",
            "description": "<p>Comma separated relations to include. By default, lists don't include relations</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique class id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Defined class name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Class description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>The frequency of session</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_from",
            "description": "<p>Start of class</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_to",
            "description": "<p>End of class</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time_from",
            "description": "<p>Class duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time_to",
            "description": "<p>Class duration</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "teacher",
            "description": "<p>The teacher handling the class</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher.id",
            "description": "<p>Unique teacher id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.name",
            "description": "<p>The teacher's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "schedules",
            "description": "<p>The class schedules. NOT INCLUDED BY DEFAULT. REFER TO Class Details doc for the data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List of students enrolled in the class. NOT INCLUDED BY DEFAULT. REFER TO Class Details doc for the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"English 101\",\n        \"description\": \"learn basics\",\n        \"frequency\": \"M,W,F\",\n        \"date_from\": \"2020-05-11\",\n        \"date_to\": \"2020-05-15\",\n        \"time_from\": \"09:00:00\",\n        \"time_to\": \"10:00:00\",\n        \"subject\": {\n            \"id\": 1,\n            \"name\": \"English\"\n        },\n        \"teacher\": {\n            \"id\": 8,\n            \"name\": \"teacher tom\"\n        }\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Science 101\",\n        \"description\": \"science experiments\",\n        \"frequency\": \"T,TH\",\n        \"date_from\": \"2020-05-11\",\n        \"date_to\": \"2020-05-15\",\n        \"time_from\": \"11:00:00\",\n        \"time_to\": \"12:00:00\",\n        \"subject\": {\n            \"id\": 4,\n            \"name\": \"Science\"\n        },\n        \"teacher\": {\n            \"id\": 8,\n            \"name\": \"teacher tom\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ClassController.php",
    "groupTitle": "Classes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A JWT Token, e.g. &quot;Bearer {token}&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/schedule/{id}",
    "title": "Schedule Detail",
    "version": "1.0.0",
    "name": "ScheduleDetail",
    "description": "<p>Returns schedule detail of specified ID</p>",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The schedule ID</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ScheduleController.php",
    "groupTitle": "Schedule",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A JWT Token, e.g. &quot;Bearer {token}&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>Session start</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>Session end</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Session status: done, canceled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher",
            "description": "<p>teacher handling this session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.first_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.last_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "materials",
            "description": "<p>Class resources: notes, lessons, etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.id",
            "description": "<p>Unique material id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "materials.added_by",
            "description": "<p>Someone who added the material</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.added_by.id",
            "description": "<p>ID of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.added_by.name",
            "description": "<p>Name of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities",
            "description": "<p>List of activities attached to the session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.id",
            "description": "<p>The activity id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activities.available_from",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activities.available_to",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities.questions",
            "description": "<p>List of questions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.questions.id",
            "description": "<p>The question id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.questions.question",
            "description": "<p>The question text</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities.materials",
            "description": "<p>Array of reading materials needed for this activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.materials.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 1,\n    \"from\": \"2020-05-15 01:00:00\",\n    \"to\": \"2020-05-15 02:00:00\",\n    \"teacher\": {\n        \"id\": 9,\n        \"first_name\": \"teacher jayson\",\n        \"last_name\": \"barino\"\n    },\n    \"status\": 0,\n    \"materials\": [\n        {\n            \"id\": 1,\n            \"title\": \"English Writing Part 1\",\n            \"instruction\": \"read the textbook\",\n            \"description\": \"learn english writing\",\n            \"uploaded_file\": null,\n            \"resource_link\": \"https://sample-lesson-link.com/english-writing-part1\",\n            \"added_by\": {\n                \"id\": 8,\n                \"name\": null\n            }\n        },\n        {\n            \"id\": 2,\n            \"title\": \"English Writing Part 1\",\n            \"instruction\": \"read the textbook\",\n            \"description\": \"learn english writing\",\n            \"uploaded_file\": null,\n            \"resource_link\": \"https://sample-lesson-link.com/english-writing-part2\",\n            \"added_by\": {\n                \"id\": 8,\n                \"name\": null\n            }\n        }\n    ],\n    \"activities\": [\n        {\n            \"id\": 1,\n            \"title\": \"English Assignment 1\",\n            \"instruction\": \"read it\",\n            \"available_from\": \"2020-05-11\",\n            \"available_to\": \"2020-05-15\",\n            \"questions\": [\n                {\n                    \"id\": 1,\n                    \"question\": \"what is noun?\"\n                },\n                {\n                    \"id\": 2,\n                    \"question\": \"what is adverb\"\n                },\n                {\n                    \"id\": 3,\n                    \"question\": \"what is predicate?\"\n                }\n            ],\n            \"materials\": [\n                {\n                    \"id\": 1,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics\"\n                },\n                {\n                    \"id\": 2,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics2\"\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"title\": \"English Assignment 2\",\n            \"instruction\": \"read it\",\n            \"available_from\": \"2020-05-20\",\n            \"available_to\": \"2020-05-30\",\n            \"questions\": [\n                {\n                    \"id\": 4,\n                    \"question\": \"what is pronoun?\"\n                },\n                {\n                    \"id\": 5,\n                    \"question\": \"what is subject\"\n                },\n                {\n                    \"id\": 6,\n                    \"question\": \"what is plural?\"\n                }\n            ],\n            \"materials\": [\n                {\n                    \"id\": 3,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics3\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/schedule/save",
    "title": "Schedule Edit",
    "version": "1.0.0",
    "name": "ScheduleEdit",
    "description": "<p>Allows editing schedule and returns the schdule object</p>",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of schedule to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>New start date/time</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>New end date/timein</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0:not-started",
              "1:ongoing",
              "2:canceled"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>0 - not started, 1 - ongoing, 2 - cancelled</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ScheduleController.php",
    "groupTitle": "Schedule",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A JWT Token, e.g. &quot;Bearer {token}&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>Session start</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>Session end</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Session status: done, canceled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher",
            "description": "<p>teacher handling this session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.first_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.last_name",
            "description": "<p>Teacher name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "materials",
            "description": "<p>Class resources: notes, lessons, etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.id",
            "description": "<p>Unique material id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "materials.added_by",
            "description": "<p>Someone who added the material</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.added_by.id",
            "description": "<p>ID of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "materials.added_by.name",
            "description": "<p>Name of uploader</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities",
            "description": "<p>List of activities attached to the session</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.id",
            "description": "<p>The activity id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.instruction",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activities.available_from",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activities.available_to",
            "description": "<p>Empty if it's a class activity. Date will be specified if given as assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities.questions",
            "description": "<p>List of questions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.questions.id",
            "description": "<p>The question id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.questions.question",
            "description": "<p>The question text</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities.materials",
            "description": "<p>Array of reading materials needed for this activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "activities.materials.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.materials.uploaded_file",
            "description": "<p>If there's any uploaded file e.g. pdf, word, excel, ppt</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.materials.resource_link",
            "description": "<p>Link to materials e.g google doc, website,etc</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 1,\n    \"from\": \"2020-05-15 01:00:00\",\n    \"to\": \"2020-05-15 02:00:00\",\n    \"teacher\": {\n        \"id\": 9,\n        \"first_name\": \"teacher jayson\",\n        \"last_name\": \"barino\"\n    },\n    \"status\": 0,\n    \"materials\": [\n        {\n            \"id\": 1,\n            \"title\": \"English Writing Part 1\",\n            \"instruction\": \"read the textbook\",\n            \"description\": \"learn english writing\",\n            \"uploaded_file\": null,\n            \"resource_link\": \"https://sample-lesson-link.com/english-writing-part1\",\n            \"added_by\": {\n                \"id\": 8,\n                \"name\": null\n            }\n        },\n        {\n            \"id\": 2,\n            \"title\": \"English Writing Part 1\",\n            \"instruction\": \"read the textbook\",\n            \"description\": \"learn english writing\",\n            \"uploaded_file\": null,\n            \"resource_link\": \"https://sample-lesson-link.com/english-writing-part2\",\n            \"added_by\": {\n                \"id\": 8,\n                \"name\": null\n            }\n        }\n    ],\n    \"activities\": [\n        {\n            \"id\": 1,\n            \"title\": \"English Assignment 1\",\n            \"instruction\": \"read it\",\n            \"available_from\": \"2020-05-11\",\n            \"available_to\": \"2020-05-15\",\n            \"questions\": [\n                {\n                    \"id\": 1,\n                    \"question\": \"what is noun?\"\n                },\n                {\n                    \"id\": 2,\n                    \"question\": \"what is adverb\"\n                },\n                {\n                    \"id\": 3,\n                    \"question\": \"what is predicate?\"\n                }\n            ],\n            \"materials\": [\n                {\n                    \"id\": 1,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics\"\n                },\n                {\n                    \"id\": 2,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics2\"\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"title\": \"English Assignment 2\",\n            \"instruction\": \"read it\",\n            \"available_from\": \"2020-05-20\",\n            \"available_to\": \"2020-05-30\",\n            \"questions\": [\n                {\n                    \"id\": 4,\n                    \"question\": \"what is pronoun?\"\n                },\n                {\n                    \"id\": 5,\n                    \"question\": \"what is subject\"\n                },\n                {\n                    \"id\": 6,\n                    \"question\": \"what is plural?\"\n                }\n            ],\n            \"materials\": [\n                {\n                    \"id\": 3,\n                    \"uploaded_file\": \"\",\n                    \"resource_link\": \"http://read-english.com/basics3\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  }
] });
