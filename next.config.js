/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    images: {
        domains: ["picsum.photos"],
    },
}

module.exports = withVanillaExtract(nextConfig)
