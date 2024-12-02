from fastapi import APIRouter, Depends, HTTPException

from ..utils import data_collector
from ..dependencies import get_token_header

router = APIRouter(
    prefix="/items",
    tags=["items"],
    dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)


data = data_collector.read_json("ds_salaries.csv", "data.json")


@router.get("/")
async def read_items():
    return data


@router.get("/{item_id}")
async def read_item(item_id: str):
    if item_id not in data:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"name": data[item_id]["name"], "item_id": item_id}


@router.put(
    "/{item_id}",
    tags=["custom"],
    responses={403: {"description": "Operation forbidden"}},
)
async def update_item(item_id: str):
    if item_id != "plumbus":
        raise HTTPException(
            status_code=403, detail="You can only update the item: plumbus"
        )
    return {"item_id": item_id, "name": "The great Plumbus"}