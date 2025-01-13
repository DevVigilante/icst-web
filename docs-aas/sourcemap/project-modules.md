---
sidebar_position: 1
title: Project Modules
description: A short description of modules and their role.
---

### Modules

:::warning
The current code base may be different because this website might have not been updated with the latest source code information available.
:::

| Module           | Role                                        |
| --------------- | ------------------------------------------- |
| `app`      | Main application module       |
| `core`      | All the models are present in this module that are resposible for storing the data of project that is created by the app (Please do not work on this, it is going to replaced soon with new one)    |
| `block`      | All the model that are in core is represented to user by this module in the form of View. Old logic editor is also included here. (Please do not work on this, it is going to replaced soon with new one)           |
| `extension`      | Module responsible for generating blocks (by serialization) This module currently uses model from `core` module but it will use models from `beans` once `logiceditor` module gets some stability. |
| `prdownloader`      | A library reponsible for downloading file from internet. |
| `treeview`      | A library responsible for presenting a folder in a tree structure. |
| `viewedtior`      | Responsible for layout designing for projects |
| `logiceditor`      | New logiceditor (for block-based programming), it will replace logic editor present in `block` module soon.    |
| `test/logiceditor`      | App to test the new logiceditor mentioned above.    |
