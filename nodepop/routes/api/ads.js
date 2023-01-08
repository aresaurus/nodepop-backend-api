'use strict"';

const express = require("express");
const createError = require("http-errors");
const Ad = require("../../models/Ad");

const router = express.Router();

// GET /api/ads
// Returns a list of ads
router.get("/", async (req, res, next) => {
  try {
    // filters
    const name = req.query.name;
    const sale = req.query.sale;
    const price = req.query.price;
    const photo = req.query.photo;
    const tags = req.query.tags;

    // pagination
    const skip = req.query.skip;
    const limit = req.query.limit;

    // field selection
    const fields = req.query.fields;

    // sort
    const sort = req.query.sort;

    const filter = {};

    if (name) {
      filter.name = name;
    }

    if (tags) {
      filter.tags = { $in: tags };
    }

    if (sale) {
      filter.sale = sale;
    }
    if (photo) {
      filter.photo = photo;
    }

    if (price) {
      if (price.includes("-")) {
        const prices = price.split("-");
        if (prices[0] === "") {
          filter.price = { $lte: prices[1] };
        } else if (prices[1] === "") {
          filter.price = { $gte: prices[0] };
        } else {
          filter.price = { $gte: prices[0], $lte: prices[1] };
        }
      } else {
        filter.price = price;
      }
    }

    const ads = await Ad.listar(filter, skip, limit, fields, sort);
    res.json({ result: ads });
  } catch (err) {
    next(err);
  }
});

// GET /api/ads((id))
// Returns an ad
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const ad = await Ad.findById(id);
    res.json({ result: ad });
  } catch (err) {
    next(err);
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const existentTag = await Ad.listTags();
    res.json({ tags: existentTag });
  } catch (err) {
    next(err);
  }
});

// PUT /api/ads/(id) (body=adData)
// Update an ad
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const adData = req.body;

    const updatedAd = await Ad.findOneAndUpdate({ _id: id }, adData, {
      new: true,
    });

    res.json({ result: updatedAd });
  } catch (err) {
    next(err);
  }
});

// POST /api/ads (body=adData)
// Create an ad
router.post("/", async (req, res, next) => {
  try {
    const adData = req.body;
    const ad = new Ad(adData);

    const savedAd = await ad.save();

    res.json({ result: savedAd });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/ads/:id
// Delete an ad
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const ad = await Ad.findById(id);

    if (!ad) {
      return next(createError(404));
    }

    await Ad.deleteOne({ _id: id });

    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
