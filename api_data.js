define({ "api": [
  {
    "type": "POST",
    "url": "HOST/api/class/activity/{id}",
    "title": "Activity Detail",
    "version": "1.0.0",
    "name": "ActivityDetail",
    "description": "<p>Get activity details</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of activity</p>"
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
            "description": "<p>Activity ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "available_from",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "available_to",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>published/unpublished</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "materials",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.id",
            "description": "<p>any uploaded materials</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 1,\n    \"title\": \"English Assignment 1\",\n    \"instruction\": \"read it\",\n    \"activity_type\": \"class activity\",\n    \"available_from\": \"2020-05-11\",\n    \"available_to\": \"2020-05-15\",\n    \"status\": \"unpublished\",\n    \"materials\": [\n        {\n            \"id\": 1,\n            \"uploaded_file\": \"http://talina.local:8080/api/download/1\",\n            \"resource_link\": \"http://read-english.com/basics\"\n        },\n        {\n            \"id\": 2,\n            \"uploaded_file\": \"http://talina.local:8080/api/download/2\",\n            \"resource_link\": \"http://read-english.com/basics2\"\n        },\n        {\n            \"id\": 5,\n            \"uploaded_file\": \"http://talina.local:8080/api/download/5\",\n            \"resource_link\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/AssignmentController.php",
    "groupTitle": "Activity",
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
    "url": "HOST/api/class/activity/save",
    "title": "Add/Edit Activity",
    "version": "1.0.0",
    "name": "AddActivity",
    "description": "<p>Save class activity and returns the activity details</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Activity ID. If specified, edits the existing activity, otherwise, creates a new record</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "activity_type",
            "description": "<p>1-class activity, 2-assignment</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-mm-dd"
            ],
            "optional": false,
            "field": "available_from",
            "description": "<p>If set as assignment, can be null if session activity</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-mm-dd"
            ],
            "optional": false,
            "field": "available_to",
            "description": "<p>If set as assignment, can be null if session activity</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "published",
            "description": "<p>0-cannot be viewed by student, 1-publish to student</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subject_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schedule_id",
            "description": "<p>ID of session to which the activity will be attached</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": "<p>Class ID to which the activity will be attached</p>"
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
            "description": "<p>Activity ID. The activity ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity_type",
            "description": "<p>class activity or assignment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "available_from",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "available_to",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>published/unpublished</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "materials",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "materials.id",
            "description": "<p>any uploaded materials</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 6,\n    \"title\": \"class activity sample edited\",\n    \"instruction\": \"this is a class activity\",\n    \"activity_type\": \"class activity\",\n    \"available_from\": null,\n    \"available_to\": null,\n    \"status\": \"published\",\n    \"materials\": [\n        {\n            \"id\": 4,\n            \"uploaded_file\": \"SCHOOL01/2020-05-21/121026-bargram.png\",\n            \"resource_link\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/AssignmentController.php",
    "groupTitle": "Activity"
  },
  {
    "type": "POST",
    "url": "HOST/api/class/activity/publish/{id}",
    "title": "Publish Activity",
    "version": "1.0.0",
    "name": "PublishActivity",
    "description": "<p>Publish activity to students</p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of activity to be published</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true/false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/AssignmentController.php",
    "groupTitle": "Activity",
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
          "content": "{\n    \"id\": 1,\n    \"name\": \"English 101\",\n    \"description\": \"learn basics\",\n    \"frequency\": \"M,W,F\",\n    \"date_from\": \"2020-05-11\",\n    \"date_to\": \"2020-05-15\",\n    \"time_from\": \"09:00:00\",\n    \"time_to\": \"10:00:00\",\n    \"subject\": {\n        \"id\": 1,\n        \"name\": \"English\"\n    },\n    \"teacher\": {\n        \"id\": 8,\n        \"name\": \"teacher tom\"\n    },\n    \"schedules\": [\n        {\n            \"id\": 1,\n            \"date\": \"2020-05-11\",\n            \"status\": 0,\n            \"is_active\": false,\n            \"materials\": [\n                {\n                    \"id\": 1,\n                    \"title\": \"English Writing Part 1\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-writing-part1\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                },\n                {\n                    \"id\": 2,\n                    \"title\": \"English Writing Part 1\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-writing-part2\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": [\n                {\n                    \"id\": 1,\n                    \"title\": \"English Assignment 1\",\n                    \"instruction\": \"read it\",\n                    \"available_from\": \"2020-05-11\",\n                    \"available_to\": \"2020-05-15\",\n                    \"materials\": [\n                        {\n                            \"id\": 1,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics\"\n                        },\n                        {\n                            \"id\": 2,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics2\"\n                        }\n                    ]\n                },\n                {\n                    \"id\": 2,\n                    \"title\": \"English Assignment 2\",\n                    \"instruction\": \"read it\",\n                    \"available_from\": \"2020-05-20\",\n                    \"available_to\": \"2020-05-30\",\n                    \"materials\": [\n                        {\n                            \"id\": 3,\n                            \"uploaded_file\": \"\",\n                            \"resource_link\": \"http://read-english.com/basics3\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"date\": \"2020-05-13\",\n            \"status\": 0,\n            \"is_active\": false,\n            \"materials\": [\n                {\n                    \"id\": 3,\n                    \"title\": \"English Speaking\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-speaking\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": []\n        },\n        {\n            \"id\": 3,\n            \"date\": \"2020-05-15\",\n            \"status\": 0,\n            \"is_active\": true,\n            \"materials\": [\n                {\n                    \"id\": 4,\n                    \"title\": \"English Grammar\",\n                    \"uploaded_file\": null,\n                    \"resource_link\": \"https://sample-lesson-link.com/english-grammar\",\n                    \"added_by\": {\n                        \"id\": 8,\n                        \"name\": \"teacher tom\"\n                    }\n                }\n            ],\n            \"activities\": []\n        }\n    ],\n    \"students\": [\n        {\n            \"id\": 1,\n            \"name\": \"jayson\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"grace\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"jen\",\n            \"user_type\": \"s\"\n        },\n        {\n            \"id\": 4,\n            \"name\": \"davy\",\n            \"user_type\": \"s\"\n        }\n    ]\n}",
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
    "url": "HOST/api/student/classes",
    "title": "Student Classes List",
    "version": "1.0.0",
    "name": "StudentClassList",
    "description": "<p>Returns the list of class of logged in student</p>",
    "group": "Classes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the student's unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "school_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "classes",
            "description": "<p>list of classes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "classes.id",
            "description": "<p>the class ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.frequency",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "classes.date_from",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "classes.date_to",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "classes.time_from",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "classes.time_to",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "subject",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "subject.id",
            "description": "<p>the subject ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "teacher",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teacher.id",
            "description": "<p>teacher ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.first_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.last_name",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"id\": 1,\n    \"first_name\": \"jayson\",\n    \"last_name\": \"barino\",\n    \"school_id\": 1,\n    \"user_type\": \"s\",\n    \"classes\": [\n        {\n            \"id\": 1,\n            \"name\": \"English 101\",\n            \"description\": \"learn basics\",\n            \"frequency\": \"M,W,F\",\n            \"date_from\": \"2020-05-11\",\n            \"date_to\": \"2020-05-15\",\n            \"time_from\": \"09:00:00\",\n            \"time_to\": \"10:00:00\",\n            \"subject\": {\n                \"id\": 1,\n                \"name\": \"English\"\n            },\n            \"teacher\": {\n                \"id\": 8,\n                \"first_name\": \"teacher tom\",\n                \"last_name\": \"cruz\"\n            }\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Science 101\",\n            \"description\": \"science experiments\",\n            \"frequency\": \"T,TH\",\n            \"date_from\": \"2020-05-11\",\n            \"date_to\": \"2020-05-15\",\n            \"time_from\": \"11:00:00\",\n            \"time_to\": \"12:00:00\",\n            \"subject\": {\n                \"id\": 4,\n                \"name\": \"Science\"\n            },\n            \"teacher\": {\n                \"id\": 8,\n                \"first_name\": \"teacher tom\",\n                \"last_name\": \"cruz\"\n            }\n        }\n    ]\n}",
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
    "title": "Teacher Class List",
    "version": "1.0.0",
    "name": "TeacherClassList",
    "description": "<p>Returns list of classes handled by teacher</p>",
    "group": "Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StringOrNumber",
            "optional": false,
            "field": "user_id",
            "description": "<p>retrieves list of classes of the specified user. If not passed, defaults to currently logged in user: &quot;me&quot;</p>"
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
            "field": "teacher.first_name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacher.last_name",
            "description": ""
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
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"English 101\",\n        \"description\": \"learn basics\",\n        \"frequency\": \"M,W,F\",\n        \"date_from\": \"2020-05-11\",\n        \"date_to\": \"2020-05-15\",\n        \"time_from\": \"09:00:00\",\n        \"time_to\": \"10:00:00\",\n        \"subject\": {\n            \"id\": 1,\n            \"name\": \"English\"\n        },\n        \"teacher\": {\n            \"id\": 8,\n            \"first_name\": \"teacher tom\",\n            \"last_name\": \"cruz\"\n        }\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Science 101\",\n        \"description\": \"science experiments\",\n        \"frequency\": \"T,TH\",\n        \"date_from\": \"2020-05-11\",\n        \"date_to\": \"2020-05-15\",\n        \"time_from\": \"11:00:00\",\n        \"time_to\": \"12:00:00\",\n        \"subject\": {\n            \"id\": 4,\n            \"name\": \"Science\"\n        },\n        \"teacher\": {\n            \"id\": 8,\n            \"first_name\": \"teacher tom\",\n            \"last_name\": \"cruz\"\n        }\n    }\n]",
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
    "type": "POST",
    "url": "HOST/api/download/activity/material/{id}",
    "title": "Activity Material",
    "version": "1.0.0",
    "name": "DownloadActivityMaterial",
    "description": "<p>Downloads the activity material</p>",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Activity material ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BLOB",
            "optional": false,
            "field": "the",
            "description": "<p>attached file</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "Download",
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
    "type": "POST",
    "url": "HOST/api/download/class/material/{id}",
    "title": "Class Instruction Material",
    "version": "1.0.0",
    "name": "DownloadClassMaterial",
    "description": "<p>Downloads the class material</p>",
    "group": "Download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Class material ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "BLOB",
            "optional": false,
            "field": "the",
            "description": "<p>attached file</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "Download",
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
    "url": "HOST/api/schedule/{id}",
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
    "url": "HOST/api/schedule/save",
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
            "description": "<p>New start date/time (YYYY-mm-dd H:i:s)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>New end date/time  (YYYY-mm-dd H:i:s)</p>"
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
  },
  {
    "type": "POST",
    "url": "HOST/api/upload/activity/material",
    "title": "Activity Material",
    "version": "1.0.0",
    "name": "UploadActivityMaterial",
    "description": "<p>Allows adding media to activity</p>",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "*.jpeg",
              "*.bmp",
              "*.png",
              "*.gif",
              "*.pdf",
              "*.doc",
              "*.txt"
            ],
            "optional": false,
            "field": "file",
            "description": "<p>The file to be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "assignment_id",
            "description": "<p>the activity id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true/false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "Upload",
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
    "type": "POST",
    "url": "HOST/api/upload/class/material",
    "title": "Class Instruction Material",
    "version": "1.0.0",
    "name": "UploadClassMaterial",
    "description": "<p>Allows adding class instruction materials</p>",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "*.jpeg",
              "*.bmp",
              "*.png",
              "*.gif",
              "*.pdf",
              "*.doc",
              "*.txt"
            ],
            "optional": false,
            "field": "file",
            "description": "<p>The file to be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "class_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "schedule_id",
            "description": "<p>The session ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>File title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true/false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Response",
          "content": "{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "Upload",
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
  }
] });
