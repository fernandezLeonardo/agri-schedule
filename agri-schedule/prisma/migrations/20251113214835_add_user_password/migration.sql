/*
  Warnings:

  - You are about to alter the column `condition` on the `InventoryItem` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `InventoryItem` MODIFY `condition` VARCHAR(191) NOT NULL;
