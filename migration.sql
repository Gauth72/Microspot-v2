-- CreateEnum
CREATE TYPE "SpaceType" AS ENUM ('INDOOR', 'OUTDOOR', 'MIXED');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'OWNER', 'PROFESSIONAL');

-- CreateEnum
CREATE TYPE "MainCategory" AS ENUM ('VENDING_MACHINE', 'KIOSK', 'ARCADE', 'LOGISTICS', 'MISC');

-- CreateEnum
CREATE TYPE "FoodVendingType" AS ENUM ('ALL', 'PIZZA', 'HOT_MEALS', 'SANDWICHES', 'SNACKS', 'HOT_DRINKS', 'COLD_DRINKS', 'DAIRY', 'EGGS', 'FRUITS_VEGETABLES', 'BREAD', 'ICE_CREAM', 'MATCHA', 'CBD');

-- CreateEnum
CREATE TYPE "FarmVendingType" AS ENUM ('ALL', 'ORGANIC', 'FARM_PRODUCTS', 'HONEY', 'CHEESE', 'CHARCUTERIE', 'BULK_PRODUCTS');

-- CreateEnum
CREATE TYPE "GoodsVendingType" AS ENUM ('ALL', 'FLOWERS', 'NEWSPAPERS', 'COSMETICS', 'HYGIENE', 'E_CIGARETTES', 'MEDICINE', 'SANITARY_PROTECTION', 'OFFICE_SUPPLIES', 'PHONE_ACCESSORIES');

-- CreateEnum
CREATE TYPE "PetVendingType" AS ENUM ('ALL', 'PET_FOOD', 'PET_SUPPLIES');

-- CreateEnum
CREATE TYPE "ArcadeType" AS ENUM ('DARTS', 'POOL', 'ARCADE_GAMES', 'PINBALL', 'OTHER_GAMES');

-- CreateEnum
CREATE TYPE "LogisticsType" AS ENUM ('PARCEL_LOCKER');

-- CreateEnum
CREATE TYPE "MiscType" AS ENUM ('HEATING_PELLETS', 'PHOTO_BOOTH', 'LOCKSMITH');

-- CreateEnum
CREATE TYPE "FoodKioskType" AS ENUM ('ALL', 'BURGER', 'WAFFLE', 'FRIES', 'KEBAB', 'SANDWICH', 'FRUITS_VEGETABLES', 'CHEESE', 'CHARCUTERIE');

-- CreateEnum
CREATE TYPE "OtherKioskType" AS ENUM ('ALL', 'FLORIST', 'EXPRESS_REPAIR');

-- CreateEnum
CREATE TYPE "WellnessKioskType" AS ENUM ('ALL', 'HAIRDRESSER', 'NAIL_SALON', 'BEAUTICIAN', 'FACIAL_MASSAGE', 'TATTOO_PIERCING', 'PET_GROOMING', 'SEWING', 'DRY_CLEANING');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('ACTIVE', 'RENTED', 'INACTIVE');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "hashedPassword" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileImage" TEXT,
    "coverImage" TEXT,
    "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
    "bio" TEXT,
    "phoneNumber" TEXT,
    "displayName" TEXT,
    "userType" "UserType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "listingType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "surface" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "spaceType" "SpaceType" NOT NULL,
    "spaceSubCategory" TEXT NOT NULL,
    "is24_7" BOOLEAN NOT NULL DEFAULT false,
    "openingTime" TEXT,
    "closingTime" TEXT,
    "mainCategory" "MainCategory" NOT NULL,
    "foodVendingType" "FoodVendingType",
    "farmVendingType" "FarmVendingType",
    "goodsVendingType" "GoodsVendingType",
    "petVendingType" "PetVendingType",
    "arcadeType" "ArcadeType",
    "logisticsType" "LogisticsType",
    "miscType" "MiscType",
    "foodKioskType" "FoodKioskType",
    "otherKioskType" "OtherKioskType",
    "wellnessKioskType" "WellnessKioskType",
    "status" "ListingStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "hasConcreteSlab" BOOLEAN NOT NULL DEFAULT false,
    "hasElectricity" BOOLEAN NOT NULL DEFAULT false,
    "hasWater" BOOLEAN NOT NULL DEFAULT false,
    "internetType" TEXT,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publicId" TEXT,
    "listingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_listingId_key" ON "Favorite"("userId", "listingId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

