// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest'
import {getBanner} from "../lib/bannersQuery";

export class BannerController {
  @get('api/banner')
  async banner() {
    return await getBanner()
  }
}
