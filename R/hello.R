library(plumber)

test.data <- list(
  "cat",
  "dog",
  1,
  2,
  "butterfly"
)

#* @get /fetchData
#* @serializer unboxedJSON
fetchData <- function() {
  list('response' = test.data)
}
