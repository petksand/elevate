from enum import Enum
from typing import List


class Category:
    alias: str
    title: str
    parent_aliases: List[str]

    def __init__(self, alias: str, title: str, parent_aliases: List[str]) -> None:
        self.alias = alias
        self.title = title
        self.parent_aliases = parent_aliases


class Categories:
    categories: List[Category]

    def __init__(self, categories: List[Category]) -> None:
        self.categories = categories
