export class ItemDtos {
    itemCode: string;
    itemName: String;
    quality: String;
    description: String;
    qtyOnHand: String;
    oneKiloPrice: String;

    constructor(itemCode: string,itemName: String,quality:String,description: String,qtyOnHand: String,
        oneKiloPrice: String){
            this.itemCode = itemCode;
            this.itemName = itemName;
            this.quality = quality;
            this.description = description;
            this.qtyOnHand = qtyOnHand;
            this.oneKiloPrice = oneKiloPrice;
    }
}
