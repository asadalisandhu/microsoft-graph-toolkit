/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { IGraph } from '@microsoft/mgt-element';
import { DriveItem } from '@microsoft/microsoft-graph-types';

/**
 * Potential file icon types
 */
export enum IconType {
  // tslint:disable-next-line: completed-docs
  Word,
  // tslint:disable-next-line: completed-docs
  PowerPoint,
  // tslint:disable-next-line: completed-docs
  Other
}

/**
 * Display metadata for a file
 */
export interface IFile extends DriveItem {}

/**
 * Get files shared between me and another user.
 * TODO: Figure out the correct graph call.
 *
 * @export
 * @param {IGraph} graph
 * @param {string} userId
 * @returns {Promise<IFile[]>}
 */
export async function getFilesSharedWithUser(graph: IGraph, userId: string): Promise<IFile[]> {
  const response = await graph.api(`users/${userId}/drive`).get();
  return response.value;
}

/**
 * Get files shared with me
 *
 * @export
 * @param {IGraph} graph
 * @returns {Promise<IFile[]>}
 */
export async function getFilesSharedWithMe(graph: IGraph): Promise<IFile[]> {
  const response = await graph.api(`/me/drive/sharedWithMe`).get();
  return response.value;
}