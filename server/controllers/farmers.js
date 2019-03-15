const pool = require('../db/config');
// dtrv15dev
// const db_schema = require('./dtr_schema');

const queries = require('../queries/farmer_queries');

const get_farmers_list = (request, response) => {

    var breedTypeId = 0;
    var plantYear = 0;
    var plantNo = 0;
    var idCard = "";
    var firstName = "";
    var lastName = "";
    var regionNo = 0;
    var provinceNo = [];
    var districtNo = 0;
    var subDistrictNo = 0;
    var farmerGroupId = [81, 77, 86];
    var plantStatus = "";
    var cooperativeGroupId = [];
    var userLogin = "surya";
    var userLevel = 1;
    var provincestring = "";
    var a = [];

    // pool.query("SELECT DISTINCT ON (RefPlantId) p.PlantId AS plantId, f.IdCard AS idCard, f.AbbrPrefix As prefix, f.FirstName AS firstName, f.LastName AS lastName, d.ThaiName AS thaiName, p.BranchCode AS branchCode, b.BranchName AS branchName, p.BreedTypeId AS breedTypeId, t.BreedTypeName AS breedTypeName, p.PlantYear AS plantYear, p.PlantNo AS plantNo, p.RefPlantId As refPlantId, p.reason AS reason, LEFT(p.PlantStatus,1) AS plantStatus, p.status AS status, p.remark AS remark FROM dtrv15dev.Plant AS p LEFT JOIN dtrv15dev.BreedType AS t ON p.BreedTypeId = t.BreedTypeId LEFT JOIN dtrv15dev.Farmer AS f ON p.IdCard = f.IdCard AND f.effectiveDate = p.effectiveDate LEFT JOIN dtrv15dev.Branch AS b ON p.BranchCode = b.BranchCode LEFT JOIN dtrv15dev.Region AS r ON f.RegionNo = r.RegionNo LEFT JOIN dtrv15dev.Province AS prov ON f.ProvinceNo = prov.ProvinceNo LEFT JOIN dtrv15dev.District AS d ON f.DistrictNo = d.DistrictNo LEFT JOIN dtrv15dev.SubDistrict AS sub ON f.SubDistrictNo = sub.SubDistrictNo LEFT JOIN dtrv15dev.FarmerGroup AS fg ON p.FarmerGroupId2 = fg.FarmerGroupId LEFT JOIN dtrv15dev.FarmerGroupAddress AS fga ON fg.FarmerGroupId = fga.FarmerGroupId WHERE  p.Flag <> 'D' AND p.plantid = (select max(pl.plantid) from dtrv15dev.Plant pl WHERE pl.RefPlantId= p.RefPlantId) AND p.farmergroupid2 IN (SELECT ufg.FarmerGroupId FROM dtrv15dev.userFarmerGroup As ufg WHERE ufg.username='surya') ORDER BY RefPlantId;", (error, results) => {        
    pool.query(queries.farmers_list, (error, results) => {        
      if (error) {
        console.log('here issue rised'+error);
        throw error
      }
      console.log(results.rows);
      response.status(200).json({farmers : results.rows});
    })

}

module.exports = {
    get_farmers_list
}