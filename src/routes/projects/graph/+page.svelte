<script lang="ts">

    import type {Point2D, Point3D, PointMetadata} from 'scatter-gl';
    import type { ComplaintData } from '$lib/types/app';
  
    import { onMount } from 'svelte';
    import {distinctColors} from "$lib/utils/constant";
    import { ScatterGL, Dataset } from 'scatter-gl';
    import complaintDataset from '$lib/data/complaint.json';

    let points: ComplaintData[] = complaintDataset;
    let is3DView = false;
    let containerElement: HTMLDivElement;
    let tooltip: HTMLElement;
    let scatterGL: ScatterGL;
    
    let selectedClusterCount: string = 'All';
    let selectedCategory: string = 'All';
    let selectedCluster: string = 'All';
    let clusterOptions = ['All'];
  
    let clusters: string[] = [];
    let categories: string[] = [];
  
    const clusterColors = new Map();
    const categoryColors = new Map();
    const clusterCountMap = new Map<string, number>();
  
    let dataset: Dataset;
    let point2D: Point2D[] = [];
    let point3D: Point3D[] = [];
    let precomputedColors: string[] = [];
    let pointMetadata: PointMetadata[] = [];
    let sortedClustersGlobal: string[] = [];
  
    const getColorForCluster = (cluster: string) => {
      if (!clusterColors.has(cluster)) {
        const index = clusterColors.size % distinctColors.length;
        clusterColors.set(cluster, distinctColors[index]);
      }
      return clusterColors.get(cluster);
    };
  
    const getColorForCategory = (category: string) => {
      if (!categoryColors.has(category)) {
        const index = categoryColors.size % distinctColors.length;
        categoryColors.set(category, distinctColors[index]);
      }
      return categoryColors.get(category);
    };
  
    const updateColors = () => {
   
      if (selectedCluster !== 'All') {
        precomputedColors = points.map(p =>
          p.topic === selectedCluster ? getColorForCluster(p.topic) || '#000000' : '#d3d3d3'
        );
      } else {
        let topClusters = new Set<string>();
        const clusterActive = selectedClusterCount !== 'All';
        if (clusterActive) {
          const count = parseInt(selectedClusterCount);
          sortedClustersGlobal.slice(0, count).forEach(cl => topClusters.add(cl));
        }
        const categoryActive = selectedCategory !== 'All';
  
        precomputedColors = points.map(p => {
          const pClusterStr = p.cluster.toString();
          const matchCluster = topClusters.has(pClusterStr);
          const matchCategory = p.CATEGORY === selectedCategory;
  
          if (clusterActive || categoryActive) {
            if ((clusterActive && matchCluster) || (categoryActive && matchCategory)) {
              if (clusterActive && matchCluster) {
                return getColorForCluster(pClusterStr) || '#000000';
              } else {
                return getColorForCategory(p.CATEGORY) || '#000000';
              }
            } else {
              return '#d3d3d3';
            }
          }
          return getColorForCategory(p.CATEGORY) || '#000000';
        });
      }
    };


    const showTooltip =function (pointIndex: number | null) {
      if (pointIndex !== null && pointIndex >= 0 && pointIndex < points.length) {
        console.log(pointIndex)
          const data = points[pointIndex];
    
          const rect = containerElement.getBoundingClientRect();
   
          tooltip.style.left = `${event.clientX - rect.left + 10}px`;
          tooltip.style.top = `${event.clientY - rect.top + 10}px`;
          tooltip.innerHTML = `
            <strong>Complaint ID:</strong> ${data.COMPLAINT_ID} <br>
            <strong>Category:</strong> ${data.CATEGORY} <br>
            <strong>Summary:</strong> ${data.COMPLAINT_SUMMARY} <br>
            <strong>Cluster:</strong> ${data.topic}
          `;
          tooltip.style.display = 'block';
        } else {
          tooltip.style.display = 'none';
        }
    }
  
    const initializeScatterGL = () => {
      updateColors();
      scatterGL = new ScatterGL(containerElement, {
        pointColorer: (index: number) => precomputedColors[index],
        showLabelsOnHover: true,
        onHover: showTooltip,
        onClick:showTooltip,
        styles: {
          axesVisible: true
        },
        orbitControls: {
          zoomSpeed: 1.75,
        },
      });
      scatterGL.render(dataset);
    };
  
    onMount(async () => {
      points.forEach(point => {
        point2D.push([point.x, point.y]);
        pointMetadata.push({
          label: point.COMPLAINT_ID,
          summary: point.COMPLAINT_SUMMARY,
          comment: point.COMMENT_TEXT
        });
        const cl = point.cluster.toString();
        clusterCountMap.set(cl, (clusterCountMap.get(cl) || 0) + 1);
      });

      dataset = new Dataset(point2D, pointMetadata);
      sortedClustersGlobal = Array.from(clusterCountMap.entries())
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

      for (let i = 1; i <= sortedClustersGlobal.length; i++) {
        clusterOptions = [...clusterOptions, i.toString()];
      }

      categories = Array.from(new Set(points.map(p => p.CATEGORY)));

      clusters = ['All', ...Array.from(new Set(points.map(p => p.topic)))];
      initializeScatterGL();
 
    });
  
   
    $: {
      // Dummy dependency to ensure reactivity.
      const dummy = selectedClusterCount + selectedCategory + selectedCluster;
      if (scatterGL) {
        updateColors();
        scatterGL.render(dataset);
      }
    }

    let showSidebar = false;
  </script>
 
 
<div class="flex h-screen">
  <!-- Sidebar / Configuration Panel -->
  <div
  class="fixed inset-y-0 left-0 z-40 w-64 bg-gray-100/40 p-4 space-y-4 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0"
  class:translate-x-0={showSidebar}
  class:-translate-x-full={!showSidebar}
>

    <!-- Mobile close button -->
    <div class="md:hidden flex justify-end opacity-100">
      <button on:click={() => showSidebar = false} class="text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    {#if !is3DView}
      <button
        class="border-2 border-gray-500 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        on:click={() => { 
          is3DView = true;
          point3D = points.map(p => [p.x, p.y, p.z]) || [];
          dataset = new Dataset(point3D, pointMetadata);
        }}>
        3D View
      </button>
    {:else}
      <button
        class="border-2 border-gray-500 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        on:click={() => { 
          is3DView = false;
          dataset = new Dataset(point2D, pointMetadata);
        }}>
        2D View
      </button>
    {/if}

    <div>
      <label for="clusterRange" class="block font-small mb-1">
        Top Clusters to Highlight: {selectedClusterCount}
      </label>
      <input
        id="clusterRange"
        type="range"
        min="1"
        max={clusterOptions.length}
        step="1"
        bind:value={selectedClusterCount}
        on:input={() => { 
          selectedCategory = 'All';
          selectedCluster = 'All';
        }}
        class="w-full"
      />
    </div>
    
    <div>
      <label for="clusterSelect" class="block font-medium mb-1">
        Clusters (by Topic):
      </label>
      <select
        id="clusterSelect"
        bind:value={selectedCluster}
        on:change={() => { 
          selectedClusterCount = 'All';
          selectedCategory = 'All';
        }}
        class="w-full border-gray-300 rounded-md">
        {#each clusters as cluster}
          <option value={cluster}>{cluster}</option>
        {/each}
      </select>
    </div>
    
    <div>
      <label for="categorySelect" class="block font-medium mb-1">Select Category:</label>
      <select
        id="categorySelect"
        bind:value={selectedCategory}
        on:change={() => { 
          selectedClusterCount = 'All';
          selectedCluster = 'All';
        }}
        class="w-full border-gray-300 rounded-md">
        <option value="All">All</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Main Graph Content -->
  <div 
   style="background-color: rgb(245, 245, 245);"
  class="flex-1 relative p-4">
    <!-- Hamburger menu for mobile -->
    <button
      on:click={() => showSidebar = true}
      class="md:hidden absolute top-4 left-4 z-50 text-gray-800"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <div bind:this={containerElement} class="w-full h-full bg-transparent"></div>
    <div bind:this={tooltip} class="absolute bg-black bg-opacity-70 text-white p-1.5 rounded pointer-events-none hidden z-50"></div>
  </div>
</div>

  