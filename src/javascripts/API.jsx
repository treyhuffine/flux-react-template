import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getAllResources() {
    $.get("/resources")
    .success(resources => {
      ServerActionsCreator.receiveResources(resources)
    })
    .error(error => {
      console.log(error);
    })
  },
  postResource(data) {
    $.post("/resources", {article: data})
    .success(newResource => {
      ServerActionsCreator.addNewResource(newResource);
    })
    .error(error => {
      console.log(error);
    });
  },
  deleteResource(fullResource) {
    $.ajax({
      url: "/resources/" + fullResource.resource.id,
      type: 'DELETE'
    })
    .success(deleteResource => {
      ServerActionsCreator.deleteResource(fullResource.index)
    })
    .error(error => {
      console.log(error);
    })
  }
}
