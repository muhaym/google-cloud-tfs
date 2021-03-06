﻿// Copyright 2017 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This is the main script run by the cloud-sdk-tool task.
 * @author przybjw@google.com (Jim Przybylinski)
 */
import {catchAll} from 'common/handle-rejection';
import * as task from 'azure-pipelines-task-lib/task';

import {CloudSdkPackage} from './cloud-sdk-package';

async function run(): Promise<void> {
  const versionSpec = task.getInput('version', false);
  const allowReporting = task.getBoolInput('allowReporting', true);

  const cloudSdkPackage = await CloudSdkPackage.createPackage(versionSpec);
  cloudSdkPackage.initializeOrAcquire(allowReporting);
}

catchAll(run());
