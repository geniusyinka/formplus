export function getTemplates() {
    return fetch('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates',)
      .then(data => data.json() )
      //.then(json => console.log(json[0]))
      
  }