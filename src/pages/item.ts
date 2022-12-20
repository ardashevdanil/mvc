import qs from "query-string"
import type { Location } from "history"

import { ItemsModel } from "../models/items-model"
import { ItemsView } from "../views/items-view"
import { ItemsController } from "../controllers/items-controller"

export function Item(location: Location) {
  const container = document.createElement("div")
  const button = document.createElement("button")

  const itemsModel = new ItemsModel()
  const itemsView = new ItemsView(itemsModel, {
    container,
    button,
  })
  const itemsController = new ItemsController(itemsModel, itemsView)

  container.innerText = "Item page:"
  button.innerText = "Add random item"
  container.appendChild(button)

  const params = qs.parse(location.search)

  for (let key in params) {
    const el = document.createElement("div")

    el.innerHTML = `${params[key]}`
    container.appendChild(el)
  }

  return container 
}

