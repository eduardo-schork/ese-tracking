export type TBaseEntity = {
    createdAt: Date;
    createdBy: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
};
