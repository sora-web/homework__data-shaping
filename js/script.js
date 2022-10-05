//タイトル出力
var titleList = "";
for (var i = 0; i < posts.length; i++) {
  titleList += "<li>" + posts[i].title + "</li>";
}
document.getElementById("title").innerHTML = titleList;

//カテゴリー出力
var categoryList = "";
for (var i = 0; i < posts.length; i++) {
  categoryId = posts[i].category_id;
  for (var category_i = 0; category_i < categories.length; category_i++) {
    if (categoryId === categories[category_i].id) {
      categoryList += "<li>" + categories[category_i].title + "</li>";
    }
  }
}
document.getElementById("category").innerHTML = categoryList;

//
//
//tagタイトル用のulを作成
var tagsUlTitle = "";
for (var tagUl_i = 0; tagUl_i < posts.length; tagUl_i++) {
  tagsUlTitle +=
    "<li>" +
    "<ul  id =" +
    "tag_title" +
    [tagUl_i] +
    ">" +
    "aaa" +
    "</ul>" +
    "</li>";
}
document.getElementById("tags_title").innerHTML = tagsUlTitle;

//ulタイトルの中身
for (var i = 0; i < posts.length; i++) {
  var tagsList = "";
  for (var tags_i = 0; tags_i < posts[i].tag_ids.length; tags_i++) {
    for (var tag_i = 0; tag_i < tags.length; tag_i++) {
      if (posts[i].tag_ids[tags_i] === tags[tag_i].id) {
        tagsList += "<li>" + tags[tag_i].title + "</li>";
      }
    }
  }
  document.getElementById("tag_title" + [i]).innerHTML = tagsList;
}

document.querySelectorAll(".c-table__list li").forEach(function (list) {
  list.classList.add("lg-mb10");
});
