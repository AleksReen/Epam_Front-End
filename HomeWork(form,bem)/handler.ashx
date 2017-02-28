<%@ WebHandler Language="C#" Class="handler" %>

using System;
using System.Web;

public class handler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Write("Здесь будет ответ от сервера, когда ему в ставят мозги!!!");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}