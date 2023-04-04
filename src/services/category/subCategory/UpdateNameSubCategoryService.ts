import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subcategory_id: any;
  subCategoryName: string;
  slug: string;
}

class UpdateNameSubCategoryService {
  async execute({ subcategory_id, subCategoryName }: SubCategoryRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const updateCategory = await prismaClient.subCategory.update({
      where: {
        id: String(subcategory_id)
      },
      data: {
        subCategoryName: subCategoryName,
        slug: removerAcentos(subCategoryName)
      }
    })

    return updateCategory;

  }
}

export { UpdateNameSubCategoryService }