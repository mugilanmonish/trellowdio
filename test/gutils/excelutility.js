import excel from "exceljs";

class ExcelUtility {
    async readDataFromExcel() {
        const book =await new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/exceldata.xlsx")
        const sheet =await book.getWorksheet("Sheet1")
        const data = await sheet.getRow(1).getCell(1).toString()
        return data
    }
}
export default new ExcelUtility();