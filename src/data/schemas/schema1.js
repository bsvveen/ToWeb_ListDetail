
export const schema = {
  "title": "",
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {"type": "string", "title": "Title", "default": "A new task"},
    "date": {"type": "string", "title": "Date", "format": "date"},
    "done": {"type": "boolean", "title": "Done?", "default": false}
  }
};

export const uischema =  {
  "title": { classNames: "col-xs-12 col-md-8 col-lg-3" },
  "date": { classNames: "col-xs-12 col-md-8 col-lg-3" }
};
