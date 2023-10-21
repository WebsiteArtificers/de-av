/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['cdn.sanity.io', 'eaw.com', 'www.blackmagicdesign.com', 'www.listentech.com', 'www.windycitywire.com', 'www.allen-heath.com', 'www.biamp.com', 'www.rcicustom.com', 'chamsyslighting.com', 'www.wacom.com', 'fsrinc.com', 'www.samsung.com', 'www.marshallfurniture.com', 'www.sharptvusa.com', 'www.mylumens.com', 'www.legrandav.com', 'www.cisco.com', 'www.crestron.com', 'www.legrand.us', 'www.planar.com', 'www.cablestogo.com', 'secure.libertycable.com', 'www.neutrik.us', 'www.mysteryelectronics.com', 'www.lg.com', 'www.qsc.com', 'www.extron.com', 'na.panasonic.com', 'epson.com', 'www.vogels.com', 'www.chauvetprofessional.com', 'www.netgear.com'],
    }
  }
  
  module.exports = nextConfig
