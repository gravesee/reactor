#' @import plumber
NULL

library(plumber)

#' @export
launchApp <- function(port=8000) {

  ##browser()
  funcs <- system.file("api", "functions.R", package = "reactor")

  url <- system.file("dist", "index.html", package="reactor")
  browseURL(url)

  r <- plumb(funcs)
  ## launch rserve and listen for requests
  r$run(port=port)

}

#' Launch App in Dev Mode
#'
#' @export
launchAppDev <- function(port=8000) {

  ##browser()
  funcs <- file.path("R", "functions.R")

  url <- file.path("reactapp", "dist", "index.html")
  browseURL(url)

  r <- plumb(funcs)
  ## launch rserve and listen for requests
  r$run(port=port)

}
