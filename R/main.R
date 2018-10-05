library(plumber)

#' @export
launchApp <- function(port=8000) {

  funcs <- system.file("R", "functions.R", package = "react")

  url <- system.file("dist", "index.html", package="react")
  browseURL(url)

  r <- plumb("./R/functions.R")
  ## launch rserve and listen for requests
  r$run(port=port)

}
