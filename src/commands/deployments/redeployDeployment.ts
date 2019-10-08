/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DeploymentTreeItem } from "vscode-azureappservice";
import { IActionContext } from "vscode-azureextensionui";
import { showOutputChannelCommandId } from "../../constants";
import { ext } from "../../extensionVariables";

export async function redeployDeployment(context: IActionContext, node?: DeploymentTreeItem): Promise<void> {
    if (!node) {
        node = await ext.tree.showTreeItemPicker<DeploymentTreeItem>(DeploymentTreeItem.contextValue, context);
    }
    await node.redeployDeployment(context, showOutputChannelCommandId);
}
