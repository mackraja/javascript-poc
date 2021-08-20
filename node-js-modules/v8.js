/**
 * V8 Engine
 * 
 * V8 is an open source JavaScript engine developed by the Chromium project 
 * for the Google Chrome web browser. It is written in C++. 
 * 
 * It is used in many projects such as Couchbase, MongoDB and Node.js.
 * 
 **/

//---------------------------
// v8.getHeapStatistics()
//---------------------------
var v8 = require('v8');  
console.log(v8.getHeapStatistics());  
// Output
/**
  { 
    total_heap_size: 4743168,
    total_heap_size_executable: 524288,
    total_physical_size: 4743168,      
    total_available_size: 4341742680,  
    used_heap_size: 2947008,
    heap_size_limit: 4345298944,       
    malloced_memory: 8192,
    peak_malloced_memory: 123040,      
    does_zap_garbage: 0,
    number_of_native_contexts: 1,      
    number_of_detached_contexts: 0  
   }
 */




//-----------------------------
// v8.getHeapSpaceStatistics()
//-----------------------------
var v8 = require('v8');  
console.log(v8.getHeapSpaceStatistics());  
// Output
/**
  [ 
    {
        space_name: 'read_only_space',
        space_size: 151552,
        space_used_size: 150392,
        space_available_size: 0,
        physical_space_size: 151552
    },
    {
        space_name: 'new_space',
        space_size: 2097152,
        space_used_size: 1005432,
        space_available_size: 41992,
        physical_space_size: 2097152
    },
    {
        space_name: 'old_space',
        space_size: 1732608,
        space_used_size: 1546536,
        space_available_size: 3392,
        physical_space_size: 1732608
    },
    {
        space_name: 'code_space',
        space_size: 360448,
        space_used_size: 89920,
        space_available_size: 0,
        physical_space_size: 360448
    },
    {
        space_name: 'map_space',
        space_size: 528384,
        space_used_size: 294912,
        space_available_size: 0,
        physical_space_size: 528384
    },
    {
        space_name: 'large_object_space',
        space_size: 401408,
        space_used_size: 393272,
        space_available_size: 0,
        physical_space_size: 401408
    },
    {
        space_name: 'code_large_object_space',
        space_size: 0,
        space_used_size: 0,
        space_available_size: 0,
        physical_space_size: 0
    },
    {
        space_name: 'new_large_object_space',
        space_size: 0,
        space_used_size: 0,
        space_available_size: 1047424,
        physical_space_size: 0
    }
  ]
 */