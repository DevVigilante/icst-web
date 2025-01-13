---
id: types-of-blocks
title: Types of Blocks
sidebar_label: Types of Blocks & Related Classes Documentation
---

# Definitions of classes of code related to Blocks

Before we introduce how to make blocks, you should be aware of types of blocks and what they are called in `AndroidAppStudio` source code including some classes related to them inorder to understand the upcomming documentation because these terms will be common and cannot be explained again and again.

## BlockBean
- **Role:** Java class that stores the base properties of blocks that are common to all blocks.

## BaseBlockBean (extends BlockBean)
- **Role:** Java class (blueprint) of a block that can only hold `BlockElementLayerBean` inside it.

## ActionBlockBean (extends BlockBean)
- **Role:** Blueprint of a block that can hold `BlockElementLayerBean` as well as `ActionBlockLayerBean`.
- **Note:** 
  - Commonly used to perform actions and does not return any value (`void`).
  - This is an abstract class; you need either `RegularBlockBean` or `TerminatorBlockBean` to create `ActionBlockBean`.

## RegularBlockBean (extends ActionBlockBean)
- **Role:** Blueprint of a block that executes some action and does not return anything after execution. Another block can be placed after this block.

## TerminatorBlockBean (extends ActionBlockBean)
- **Role:** Blueprint of a block that executes some action and does not return anything after execution. This must be the last block, and no other blocks can be placed after it.

## ExpressionBlockBean (extends BaseBlockBean)
- **Role:** Blueprint of a block that returns something after execution. It can only hold `BlockElementLayerBean`, not `ActionBlockLayerBean`.

## EventDefinitionBlockBean (extends BaseBlockBean)
- **Role:** Blueprint of an event definition block. This block defines an event, provides its parameters, and connects to other blocks associated with the event.
- **Note:**
  - The `ActionBlock` attached after `EventDefinitionBlockBean` is considered part of the event.
  - Non-attached blocks remain independent and are removed once the logic editor is closed.
