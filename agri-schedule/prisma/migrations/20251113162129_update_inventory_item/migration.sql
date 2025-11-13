/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `InventoryItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InventoryItem` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `InventoryItem_name_key` ON `InventoryItem`(`name`);
