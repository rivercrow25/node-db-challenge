projects                        can have multiple tasks and resources (needs joining table for resources)
    -unique id
    -required name
    -optional desc
    -boolean defaults to false
resource                        can be on multiple projects
    -unique id
    -required name unique
    -optional desc
task                            can only be on one project
    -unique id
    -required desc
    -optional notes
    -boolean defaults to false
