library(plumber)

#* @filter cors
cors <- function(req, res) {

  res$setHeader("Access-Control-Allow-Origin", "*")

  if (req$REQUEST_METHOD == "OPTIONS") {
    res$setHeader("Access-Control-Allow-Methods","*")
    res$setHeader("Access-Control-Allow-Headers", req$HTTP_ACCESS_CONTROL_REQUEST_HEADERS)
    res$status <- 200
    return(list())
  } else {
    plumber::forward()
  }

}

test.data <- list(
  "cat",
  "dog",
  1,
  2,
  "butterfly"
)

#* @get /getRObjects
#* @serializer unboxedJSON
getRObjects <- function() {
  list('response' = test.data)
}
