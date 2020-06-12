/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//'use strict';
/**
 * Write your transction processor functions here
 **/


/**
 * Track the transfer of land from one owner to another
 * @param {org.hesbon.land.transferLand} transferLand - the trade to be processed
 * @transaction
 */

async function transferLand(trade) {
 // set the new owner of the commodity
 trade.landAsset.owner = trade.newOwner;
 const assetRegistry = await getAssetRegistry('org.hesbon.land.Land');


 // persist the state of the commodity
 await assetRegistry.update(trade.landAsset);
}
