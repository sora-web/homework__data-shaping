for (var i = 0; i < posts.length; i++) {
  //
  //
  //wrapper作る
  const tbody = document.getElementById("tbody");
  let tr_element = document.createElement("tr");

  tbody.appendChild(tr_element);

  //
  //タイトルゾーン
  //

  //
  //タイトル用のtdを作る
  let td_title = document.createElement("td");
  td_title.classList.add("c-table__data");
  let id_title = "title" + [i];
  td_title.setAttribute("id", id_title);
  tr_element.appendChild(td_title);

  //
  //タイトルを出力
  document.getElementById(id_title).innerHTML = posts[i].title;

  //
  //カテゴリーゾーン
  //

  //
  //カテゴリー用のtdを作る
  let td_category = document.createElement("td");
  td_category.classList.add("c-table__data");
  let id_category = "cateobory" + [i];
  td_category.setAttribute("id", id_category);
  tr_element.appendChild(td_category);

  //
  //postsのcategory_idをcategoriesのtitleに変換
  //
  //カテゴリーを出力
  for (var category_i = 0; category_i < categories.length; category_i++) {
    if (posts[i].category_id === categories[category_i].id) {
      document.getElementById(id_category).innerHTML =
        categories[category_i].title;
    }
  }

  //
  //タグゾーン
  //

  if (posts[i].tag_ids.length) {
    //
    //タグ用のtdを作る
    let td_tags = document.createElement("td");
    td_tags.classList.add("c-table__data");
    let id_tags = "tags" + [i];
    td_tags.setAttribute("id", id_tags);
    tr_element.appendChild(td_tags);

    //
    //タグ用のulを作る
    let tags_list = document.createElement("ul");
    tags_list.classList.add("c-table__list");
    td_tags.appendChild(tags_list);

    //
    //タグ用のliを作る
    //
    //tag_iはpostsのtag＿idsのカウント用
    for (var tag_i = 0; tag_i < posts[i].tag_ids.length; tag_i++) {
      let tags_item = document.createElement("li");
      tags_item.classList.add("c-table__item");
      let id_tag = "tag" + [i] + "__" + [tag_i];
      tags_item.setAttribute("id", id_tag);
      tags_list.appendChild(tags_item);

      //
      //タグを出力
      //
      //tags_iはtagsのidのカウント用
      for (var tags_i = 0; tags_i < tags.length; tags_i++) {
        if (posts[i].tag_ids[tag_i] === tags[tags_i].id) {
          document.getElementById(id_tag).innerHTML = tags[tags_i].title;
        }
      }
    }
  }
}
