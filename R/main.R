library(plumber)

#' @export
launchApp <- function(port=8000) {

  funcs <- system.file("api", "functions.R", package = "react")

  url <- system.file("dist", "index.html", package="react")
  browseURL(url)

  r <- plumb(funcs)
  ## launch rserve and listen for requests
  r$run(port=port)

}
