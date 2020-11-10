function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "error header";
  message = "error message";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return { info: res.header + res.result };
  }
  return {
    info: res.message + res.message,
  };
}

type alertType = 'success' | 'danger' | 'warning'

function setAlertType(type: alertType){

}

setAlertType('success');
setAlertType('danger');
// setAlertType('default');