const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/*
----------------------------------------
GET ALL JOB POSTINGS
----------------------------------------
*/
router.get("/jobs", async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        id,
        job_code,
        position_title,
        department,
        account,
        job_description,
        job_requirements,
        status,
        workSetup,
        created_datetime
      FROM 1001_cmx_appdata_recruitment_database_ph.db_cmxph_job_postings
      WHERE status = 'Open'
      ORDER BY created_datetime DESC
    `);

    res.json({
      success: true,
      data: rows
    });

  } catch (err) {
    console.error("❌ Error fetching jobs:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch job postings",
      details: err.message // 🔥 helpful for debugging
    });
  }
});


/*
----------------------------------------
GET JOB BY ID
----------------------------------------
*/
router.get("/jobs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.execute(`
      SELECT 
        id,
        position_title,
        department,
        account,
        job_description,
        job_requirements,
        status,
        workSetup,
        created_datetime
      FROM \`1001_cmx_appdata_recruitment_database_ph\`.db_cmxph_job_postings
      WHERE id = ?
    `, [id]);

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        error: "Job not found"
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });

  } catch (err) {
    console.error("❌ Error fetching job:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch job"
    });
  }
});


module.exports = router;